<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form></coach-form>
    </base-card>
  </section>
</template>


<script>
import CoachForm from '../../components/coaches/CoachesForm.vue';

export default {
  components: {
    CoachForm,
  },
};
</script>
