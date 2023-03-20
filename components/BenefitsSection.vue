<template>
  <section class="benefits">
    <h4 class="headline4 benefits__title">Тим, хто нагоняє Траф</h4>
    <div class="benefits__container">
      <div class="benefits__block">
        <div class="benefits__icon-background">
          <img alt="MegaphoneIcon" :src="Megaphone" class="benefits__icon" />
        </div>
        <div class="benefits__text-wrapper">
          <p class="body-bold">
            Круті акції, призи та прибуткова бонусна програма
          </p>
          <p class="caption-text">
            Ми постійно працюємо над тим, щоб вам було цікаво та вигідно!
          </p>
        </div>
      </div>
      <div class="benefits__block">
        <div class="benefits__icon-background">
          <img alt="SmileIcon" :src="Smile" class="benefits__icon" />
        </div>
        <div class="benefits__text-wrapper">
          <p class="body-bold">Особлива підтримка для кожного 24/7</p>
          <p class="caption-text">У вас буде свій персональний менеджер</p>
        </div>
      </div>
      <div class="benefits__block">
        <div class="benefits__icon-background">
          <img alt="BarsIcon" :src="Bars" class="benefits__icon" />
        </div>
        <div class="benefits__text-wrapper">
          <p class="body-bold">Детальна статистика</p>
          <p class="caption-text">
            Миттєве оновлення, зрозуміла система відображення статистики
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Megaphone from '../images/Megaphone.svg';
import Smile from '../images/Smile.svg';
import Bars from '../images/Bars.svg';

export default {
  setup() {
    return {
      Megaphone,
      Smile,
      Bars,
    };
  },
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/breakpoints.scss';

.benefits {
  display: flex;
  flex-direction: column;
  gap: 75px;

  @include sm-screen {
    width: 100%;
    gap: 35px;
  }

  &__container {
    display: flex;
    max-width: 1200px;

    @include sm-screen {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 25px;
      padding: 0 15px;
    }
  }

  &__text-wrapper {
    display: flex;
    width: 75%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    :nth-child(2) {
      color: $grey !important;
      width: 100%;
    }

    @include sm-screen {
      align-items: flex-start;

      gap: 5px;
    }
  }

  &__block {
    width: 345px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    @include sm-screen {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    & p {
      text-align: center;
      width: 250px;
      margin: 0;

      @include sm-screen {
        text-align: start;
      }
    }
  }

  &__title {
    color: $headline-grey !important;
    text-align: center;

    @include sm-screen {
      font-weight: 700 !important;
      font-size: 25px !important;
      line-height: 25px !important;
    }
  }

  &__icon {
    width: 35px;
    height: 35px;

    @include sm-screen {
      width: 25px;
      height: 25px;
    }
  }

  &__icon-background {
    width: 65px;
    height: 65px;
    background: $primary-yellow;
    border-radius: 15px;
    padding: 15px;

    @include sm-screen {
      padding: 10px;
      width: 45px;
      height: 45px;
    }
  }
}
</style>
