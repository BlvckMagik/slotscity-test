<template>
  <main class="page">
    <AboutSection />
    <BenefitsSection />
  </main>
</template>

<script>
import AboutSection from './AboutSection';
import BenefitsSection from './BenefitsSection';

export default {
  components: {
    AboutSection,
    BenefitsSection,
  },
};
</script>

<style lang="scss">
@import '../styles/breakpoints.scss';

.page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 40px;
  gap: 125px;

  @include sm-screen {
    flex-direction: column-reverse;
    padding: 50px 15px;
    gap: 50px;
  }
}
</style>
