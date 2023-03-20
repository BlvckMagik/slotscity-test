<template>
  <img alt="Centauri1" :src="Centauri1" class="centauri1" />
  <img alt="Centauri2" :src="Centauri2" class="centauri2" />
  <Header @showLogInModal="showLogInModal" @showSignUpModal="showSignUpModal" />
  <Content />
  <LoginModal v-if="isLogInModalOpen" @hideLogInModal="hideLogInModal" />
  <SignupModal v-if="isSignUpModalOpen" @hideSignUpModal="hideSignUpModal" />
</template>

<script>
import Header from './Header';
import Content from './Content';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import Centauri1 from '../images/Centauri1.svg';
import Centauri2 from '../images/Centauri2.svg';

export default {
  data() {
    return {
      isLogInModalOpen: false,
      isSignUpModalOpen: false,
    };
  },

  methods: {
    showLogInModal() {
      this.isLogInModalOpen = true;
    },

    showSignUpModal() {
      this.isSignUpModalOpen = true;
    },

    hideLogInModal() {
      this.isLogInModalOpen = false;
    },

    hideSignUpModal() {
      this.isSignUpModalOpen = false;
    },
  },

  setup() {
    return {
      Centauri1,
      Centauri2,
    };
  },

  components: {
    Header,
    Content,
    LoginModal,
    SignupModal,
  },
};
</script>

<style lang="scss">
@import '../styles/breakpoints.scss';

.centauri1 {
  position: absolute;
  right: -621px;
  top: 45px;
  filter: blur(10px);

  @include sm-screen {
    right: -308px;
    top: -58px;
    width: 396.25px;
    height: 676px;
    filter: blur(65px);
  }
}

.centauri2 {
  position: absolute;
  left: -252px;
  bottom: -232px;

  @include sm-screen {
    width: 349.25px;
    height: 419px;
    left: -143px;
    bottom: 167px;
  }
}
</style>
