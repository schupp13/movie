<template>
  <div>
    <v-hover v-slot="{ isHovering, props: hoverProps }">
      <v-card
        v-bind="hoverProps"
        @click="itemPage"
        elevation="0"
        class="basic-card-info rounded-sm"
        :class="props.isSelected && 'item-selected '"
        overlay-opacity="0.15"
      >
        <RatingPercent
          v-if="!isHovering"
          class="rating"
          :rating="props.rating"
        />

        <router-link to="/">
          <v-img
            :aspectRatio="isHovering ? backdropRatio : aspectRatio"
            class="poster-image"
            :src="isHovering && getBackDrop ? getBackDrop : getImage"
            onmouseover="this.src=getBackDrop"
            onmouseout="this.src=getImage"
            cover
            transition="fade-transition"
          />
          <v-overlay
            :model-value="isHovering"
            contained
            class="align-center justify-center"
            theme="dark"
            overlay-opacity="1"
          >
            <div class="card-desciption">
              <v-card-title>
                {{ props.title }}
              </v-card-title>
              <v-card-title>
                {{ props.title }}
              </v-card-title>
              <v-card-text>
                {{ getDiscription }}
              </v-card-text>
              <v-card-item>
                <RatingStars :rating="props.rating" />
              </v-card-item>
            </div>
          </v-overlay>
        </router-link>
      </v-card>
    </v-hover>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import TrailerDialog from "@/components/dialogs/TrailerDialog.vue";
import RatingPercent from "@/components/charts/RatingPercent.vue";
import RatingStars from "@/components/charts/RatingStars.vue";
const props = defineProps({
  image: {
    type: String,
  },
  backDrop: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isSelected: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  itemId: {
    type: Number,
    required: true,
  },
});

const aspectRatio = ref(2 / 3);
const backdropRatio = ref(16 / 9);
const show = ref(false);

const itemPage = () => {};

const getImage = computed(() => {
  return `https://image.tmdb.org/t/p/original/${props.image}`;
});
const getDiscription = computed(() => {
  return props.description.length > 90
    ? `${props.description.slice(0, 90)}...`
    : props.description.length < 90
    ? props.description
    : "No Description";
});

const getBackDrop = computed(() => {
  return `${import.meta.env.VITE_MOVIE_DB_IMAGE_URL}/${props.backDrop}`;
});
</script>

<style lang="scss" scoped>
$card-width: 175px;
$card-height: 300px;
.basic-card-info {
  position: relative;
  width: $card-width;
  height: $card-height;
  margin: 10px;

  .card-desciption {
    display: none;
    font-size: 0.8rem;
  }

  &:hover {
    transition: all 1 ease-in-out;
    transition-delay: 3s;
    width: calc($card-width * 2.75);
    height: $card-height;

    transform-origin: left right;
    z-index: 10;
    // position: fixed;

    .card-desciption {
      display: block;
    }
    img {
      // transition: all 1s ease-in-out;
    }
  }
}
.rating {
  position: absolute;
  bottom: 20px;
  left: 0;
  z-index: 10;
}
</style>