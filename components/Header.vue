<template>
  <header class="header">
    <img alt="horizontalLogo" :src="HorizontalLogo" class="header__logo" />
    <div class="header__buttons">
      <button
        class="outlined-button header__buttons-login"
        @click="showLogInModal"
      >
        Вхід
      </button>
      <button
        class="contained-button header__buttons-signup"
        @click="showSignUpModal"
      >
        Реєстрація
      </button>
    </div>
  </header>
</template>

<script>
import HorizontalLogo from '../images/LogoHorizontal.svg';

export default {
  methods: {
    showLogInModal() {
      this.$emit('showLogInModal');
    },

    showSignUpModal() {
      this.$emit('showSignUpModal');
    },
  },

  setup() {
    return {
      HorizontalLogo,
    };
  },
};
</script>

<style lang="scss">
@import '../styles/breakpoints.scss';

.header {
  position: sticky;
  width: 100vw;
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #23262f;
  @include sm-screen {
    height: 60px;
  }

  &__logo {
    @include sm-screen {
      width: 148.13px;
      height: 30px;
    }
  }

  @include sm-screen {
    justify-content: space-around;
  }

  &__buttons {
    position: absolute;
    right: 26px;
    z-index: 2;

    @include sm-screen {
      position: static;
    }

    &-login {
      width: 60px;
      height: 40px;
      margin-right: 15px;
    }

    &-signup {
      width: 106px;
      height: 40px;
    }
  }
}
</style>
