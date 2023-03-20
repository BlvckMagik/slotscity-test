<template>
  <div class="fixed-overlay" @click="hideLogInModal">
    <div @click.stop class="login-modal">
      <div class="login-modal__body">
        <div class="modal-close" @click="hideLogInModal">
          <img alt="cancelIcon" :src="Line" class="modal-close__img" />
        </div>
        <div class="login-modal__caption">
          <div class="login-modal__background">
            <img alt="lockIcon" :src="Lock" class="login-modal__image" />
          </div>
          <h3 class="login-modal__title">Вхід</h3>
        </div>
        <form class="login-modal__form">
          <div class="login-modal__wrapper">
            <input
              placeholder="Ваш email"
              type="text"
              ref="email"
              class="regular-input login-modal__input"
              v-model="formData.email"
              @input="
                validator(
                  'email',
                  'Введіть коректну адресу',
                  isEmail(this.formData.email)
                )
              "
            />
            <span class="login-modal__error" v-if="errors.email">
              {{ errors.email }}
            </span>
          </div>
          <div class="login-modal__wrapper">
            <input
              placeholder="Ваш пароль"
              type="password"
              ref="password"
              class="regular-input login-modal__input"
              v-model="formData.password"
              @input="
                validator(
                  'password',
                  'Пароль має містити літери і символи',
                  isPassword(this.formData.password)
                )
              "
            />
            <img alt="eyelIcon" :src="Eye" @click="togglePassVisibility" />
            <span class="login-modal__error" v-if="errors.password">
              {{ errors.password }}
            </span>
          </div>
          <button class="contained-button login-modal__button">Війти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Lock from '../images/Lock.svg';
import Line from '../images/Line.svg';
import Eye from '../images/Eye.svg';
import { isEmail, isPassword } from '../utils/utils';

export default {
  data() {
    return {
      isPasswordVisible: false,
      formData: {
        email: '',
        password: '',
      },
      errors: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
    hideLogInModal() {
      this.$emit('hideLogInModal');
    },

    togglePassVisibility() {
      const node = this.$refs['password'];
      node.getAttribute('type') === 'password'
        ? node.setAttribute('type', 'text')
        : node.setAttribute('type', 'password');
    },

    setErrorState(ref, message, errKey = ref) {
      const node = this.$refs[ref];
      this.errors[errKey] = message;
      node.classList.add('input-error');
      node.classList.remove('input-success');
    },

    setIdleState(ref, errKey = ref) {
      const node = this.$refs[ref];
      this.errors[errKey] = '';
      node.classList.remove('input-error');
      node.classList.remove('input-success');
    },

    setSuccessState(ref, errKey = ref) {
      const node = this.$refs[ref];
      this.errors[errKey] = '';
      node.classList.remove('input-error');
      node.classList.add('input-success');
    },

    validator(fieldName, errorMessage, validateRule) {
      if (this.formData[fieldName] === '') this.setIdleState(fieldName);
      else if (validateRule) this.setSuccessState(fieldName);
      else this.setErrorState(fieldName, errorMessage);
    },
  },

  setup() {
    return {
      Lock,
      Line,
      Eye,
    };
  },
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/breakpoints.scss';

.login-modal {
  position: absolute;
  width: 355px;
  min-height: 284px;
  background: #23262f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 30px;
  left: calc(50% - 177.5px);
  top: calc(50% - 142px);
  border-radius: 25px;

  @include sm-screen {
    bottom: 10px;
    top: auto;
  }

  &__body {
    width: 100%;
  }

  &__caption {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__background {
    width: 45px;
    height: 45px;
    background-color: $primary-orange;
    border-radius: 15px;
    padding: 10px;
  }

  &__image {
    width: 25px;
    height: 25px;
  }

  &__title {
    font-weight: 700;
    font-size: 25px;
    line-height: 25px;
    color: #ffffff;
    margin: 0;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 25px;
  }

  &__input {
    width: 100%;
  }

  &__button {
    width: 88px;
    height: 48px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
  }

  &__wrapper {
    position: relative;
    width: 100%;

    & img {
      position: absolute;
      top: 12px;
      right: 16px;
    }
  }

  &__error {
    color: $primary-orange;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    margin-left: 20px;
  }
}
</style>
