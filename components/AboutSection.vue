<template>
  <section class="about">
    <img alt="graphImage" :src="Graph" class="about__graph" />
    <div class="about__title">
      <img alt="hornsImage" :src="SignOfTheHorns" class="about__image" />
      <h3 class="headline3">Володарі Трафіку</h3>
      <img alt="hornsImageReverse" :src="SignOfTheHorns" class="about__image" />
    </div>
    <p class="caption-text about__content">
      SC Partners – нова партнерська мережа з величезним досвідом та
      експертизою. Кожен наш партнер отримує очікувану вигоду на абсолютно
      прозорих умовах та бездоганний супровід. Ми будемо поряд з вами: на
      відстані одного повідомлення в месенджері або дзвінка, адже ми працюємо
      поряд з вами.
    </p>
    <img alt="starsIcon" :src="Stars" class="about__stars" />
  </section>
</template>

<script>
import Graph from '../images/Graph.svg';
import SignOfTheHorns from '../images/SignOfTheHorns.svg';
import Stars from '../images/Stars.svg';

export default {
  setup() {
    return {
      Graph,
      SignOfTheHorns,
      Stars,
    };
  },
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/breakpoints.scss';

.about {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 39px 44px;
  max-width: 900px;
  height: 263px;
  background: rgba(35, 38, 47, 0.5);
  border-radius: 24px;
  overflow: hidden;

  @include sm-screen {
    width: 100%;
    padding: 25px;
    height: auto;
    overflow: visible;
  }

  &__graph {
    position: absolute;
    height: 182px;
    left: 0px;
    top: calc(50% - 182px / 2 - 0.5px);

    @include sm-screen {
      width: 100%;
      object-fit: cover;
    }
  }
  &__image {
    width: 35.98px;
    height: 45px;

    @include sm-screen {
      width: 19.99px;
      height: 25px;
    }

    &:nth-child(3) {
      transform: scale(-1, 1);
    }
  }
  &__title {
    width: 80%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    & h3 {
      color: $headline-grey !important;

      @include sm-screen {
        font-weight: 700 !important;
        font-size: 25px !important;
        line-height: 25px !important;
      }
    }
    @include sm-screen {
      width: auto;
      gap: 10px;
    }
  }
  &__content {
    text-align: center;
    color: $grey !important;

    @include sm-screen {
      margin-bottom: 0;
    }
  }
  &__stars {
    margin-top: 25px;
    width: 175px;
    height: 15px;
  }
}
</style>
