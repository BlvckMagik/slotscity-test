<template>
  <div class="fixed-overlay" @click="hideSignUpModal">
    <div @click.stop class="signup-modal">
      <div class="signup-modal__body">
        <div class="modal-close" @click="hideSignUpModal">
          <img alt="cancelIcon" :src="Line" class="modal-close__img" />
        </div>
        <div class="signup-modal__banner">
          <img alt="graphIcon" :src="graphModal" class="signup-modal__graph" />
          <img alt="linesIcon" :src="Lines" class="signup-modal__lines" />
          <div class="signup-modal__description">
            <h5 class="signup-modal__title">Зможеш обрати свій варіант</h5>
            <div class="signup-modal__benefits">
              <div class="signup-modal__benefits-item">
                <div class="signup-modal__tick">
                  <img
                    alt="checkIcon"
                    :src="CheckWhite"
                    class="signup-modal__tick-img"
                  />
                </div>
                <div class="signup-modal__text">
                  <h6 class="button-small signup-modal__text-title">CPA</h6>
                  <p class="text1 signup-modal__text-subtitle">$25 і вище</p>
                </div>
              </div>
              <div class="signup-modal__benefits-item">
                <div class="signup-modal__tick">
                  <img
                    alt="checkIcon"
                    :src="CheckWhite"
                    class="signup-modal__tick-img"
                  />
                </div>
                <div class="signup-modal__text">
                  <h6 class="button-small signup-modal__text-title">
                    REVSHARE
                  </h6>
                  <p class="text1 signup-modal__text-subtitle">
                    Піднімай до 60%
                  </p>
                </div>
              </div>
              <div class="signup-modal__benefits-item">
                <div class="signup-modal__tick">
                  <img
                    alt="checkIcon"
                    :src="CheckWhite"
                    class="signup-modal__tick-img"
                  />
                </div>
                <div class="signup-modal__text">
                  <h6 class="button-small signup-modal__text-title">Гібрід</h6>
                  <p class="text1 signup-modal__text-subtitle">
                    Зробимо як скажеш
                  </p>
                </div>
              </div>
            </div>
            <div class="signup-modal__navigation">
              <img
                alt="arrowIcon"
                :src="Arrow"
                class="signup-modal__navigation-arrow"
              />
              <div class="signup-modal__navigation-page"></div>
              <div class="signup-modal__navigation-page"></div>
              <div class="signup-modal__navigation-page"></div>
              <img
                alt="arrowIcon"
                :src="Arrow"
                class="signup-modal__navigation-arrow"
              />
            </div>
          </div>
        </div>
        <form class="signup-modal__content">
          <div class="signup-modal__caption">
            <div class="signup-modal__background">
              <img alt="userIcon" :src="User" class="signup-modal__image" />
            </div>
            <h3 class="signup-modal__caption-title">Реєстрація</h3>
          </div>
          <div class="signup-modal__inputs">
            <div class="login-modal__wrapper">
              <input
                placeholder="Ваше імʼя"
                type="text"
                ref="name"
                class="regular-input login-modal__input"
                v-model="formData.name"
                @input="
                  validator(
                    'name',
                    'Ім\'я має містити понад 3 літери',
                    isValidName(this.formData.name)
                  )
                "
              />
              <span class="login-modal__error" v-if="errors.name">
                {{ errors.name }}
              </span>
            </div>
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
              <img
                alt="eyelIcon"
                :src="Eye"
                @click="togglePassVisibility('password')"
              />
              <span class="login-modal__error" v-if="errors.password">
                {{ errors.password }}
              </span>
            </div>
            <div class="login-modal__wrapper">
              <input
                placeholder="Повторіть пароль"
                type="password"
                ref="repeatPassword"
                class="regular-input login-modal__input"
                v-model="formData.repeatPassword"
                @input="
                  validator(
                    'repeatPassword',
                    'Паролі не співпадають',
                    this.formData.repeatPassword === this.formData.password
                  )
                "
              />
              <img
                alt="eyelIcon"
                :src="Eye"
                @click="togglePassVisibility('repeatPassword')"
              />
              <span class="login-modal__error" v-if="errors.repeatPassword">
                {{ errors.repeatPassword }}
              </span>
            </div>
          </div>
          <div class="signup-modal__socials">
            <h6 class="signup-modal__socials-title">Оберіть спосіб звязку</h6>
            <div class="signup-modal__container">
              <div
                class="signup-modal__social"
                v-bind:class="{
                  'active-social': activeSocial === 'telegram',
                }"
                @click="activeSocial = 'telegram'"
              >
                <img
                  alt="telegramIcon"
                  :src="Telegram"
                  class="signup-modal__social-img"
                />
              </div>
              <div
                class="signup-modal__social"
                v-bind:class="{
                  'active-social': activeSocial === 'skype',
                }"
                @click="activeSocial = 'skype'"
              >
                <img
                  alt="skypeIcon"
                  :src="Skype"
                  class="signup-modal__social-img"
                />
              </div>
              <div class="login-modal__wrapper">
                <input
                  placeholder="@телеграм_адреса"
                  type="text"
                  ref="socials"
                  class="regular-input login-modal__input"
                  v-model="formData.socials"
                  @input="
                    validator(
                      'socials',
                      'Введіть коректну адресу',
                      isValidTag(this.formData.socials)
                    )
                  "
                />
                <span class="login-modal__error" v-if="errors.socials">
                  {{ errors.socials }}
                </span>
              </div>
            </div>
          </div>
          <button class="contained-button signup-modal__button">
            Реєстрація
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import graphModal from '../images/graphModal.svg';
import CheckWhite from '../images/CheckWhite.svg';
import Arrow from '../images/Arrow.svg';
import Telegram from '../images/Telegram.svg';
import Skype from '../images/Skype.svg';
import User from '../images/User.svg';
import Lines from '../images/Lines.svg';
import Line from '../images/Line.svg';
import Eye from '../images/Eye.svg';
import { isEmail, isPassword, isValidName, isValidTag } from '../utils/utils';

export default {
  data() {
    return {
      activeSocial: 'telegram',
      isPasswordVisible: false,
      formData: {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        socials: '',
      },
      errors: {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        socials: '',
      },
    };
  },

  methods: {
    hideSignUpModal() {
      this.$emit('hideSignUpModal');
    },

    togglePassVisibility(ref) {
      const node = this.$refs[ref];
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
      graphModal,
      CheckWhite,
      Telegram,
      Skype,
      Arrow,
      User,
      Lines,
      Line,
      Eye,
    };
  },
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/breakpoints.scss';

.signup-modal {
  position: absolute;
  width: 770px;
  min-height: 600px;
  background: #23262f;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: calc(50% - 385px);
  top: calc(50% - 300px);
  border-radius: 25px;

  @include sm-screen {
    bottom: 10px;
    top: auto;
    width: 355px;
    min-height: 510px;
    left: calc(50% - 177.5px);
  }

  &__body {
    display: flex;

    @include sm-screen {
      padding: 25px;
      width: 355px;
    }
  }

  &__banner {
    position: relative;
    width: 385px;
    height: 600px;
    background-color: $primary-green;
    border-radius: 25px 0 0 25px;

    @include sm-screen {
      display: none;
    }
  }

  &__graph {
    position: absolute;
  }

  &__lines {
    position: absolute;
    bottom: 0;
    border-radius: 0 0 0 25px;
  }

  &__description {
    width: 220px;
    height: 330px;
    margin: 65px 0 0 53px;
  }

  &__title {
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    margin: 0;
    color: $text-white;
    width: 188px;
    height: 80px;
    margin-bottom: 65px;
  }

  &__benefits {
    display: flex;
    flex-direction: column;
    gap: 25px;

    &-item {
      display: flex;
      gap: 25px;
      align-items: center;
    }
  }

  &__tick {
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 45px;
    padding: 10.5px;
  }

  &__text {
    &-title {
      margin: 0;
      color: $text-white !important;
    }

    &-subtitle {
      margin: 0;
      color: $text-white !important;
    }
  }

  &__navigation {
    position: absolute;
    width: 96px;
    height: 16px;
    gap: 10px;
    display: flex;
    align-items: center;
    left: 145px;
    bottom: 107px;

    &-page {
      width: 8px;
      height: 8px;
      background: #e6e8ec;
      border-radius: 4px;
      cursor: pointer;

      &:nth-child(2) {
        background-color: #ffd166;
      }
    }

    &-arrow {
      cursor: pointer;

      &:nth-child(1) {
        transform: scale(-1, 1);
      }
    }
  }

  &__content {
    width: 385px;
    height: 600px;
    padding: 60px 45px 25px 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @include sm-screen {
      padding: 0;
      width: 355px;
      height: auto;
    }
  }

  &__caption {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 192px;
    height: 80px;

    @include sm-screen {
      align-self: flex-start;
      flex-direction: row;
      height: 45px;
    }
  }

  &__background {
    width: 45px;
    height: 45px;
    background: $primary-green;
    border-radius: 15px;
    padding: 10px;
  }

  &__caption-title {
    width: 132px;
    height: 25px;
    font-weight: 700;
    font-size: 25px;
    line-height: 25px;
    color: #ffffff;
    margin: 0;
    text-align: center;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  &__socials {
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &-title {
      margin: 0;
      font-weight: 700;
      font-size: 12px;
      line-height: 12px;
      text-transform: uppercase;
      color: $text-grey;
      text-align: center;
    }
  }

  &__container {
    display: flex;
    gap: 10px;
  }

  &__social {
    width: 45px;
    height: 45px;
    border-radius: 25px;
    padding: 9px;
  }

  &__button {
    width: 133px;
    height: 48px;
    padding: 16px 24px;
  }
}
</style>
