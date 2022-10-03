export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    const response = await fetch(
      `https://coach-app-f9fe6-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );
    // const responseData = await response.json();
    if (!response.ok) {
      //error
    }
    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://coach-app-f9fe6-default-rtdb.firebaseio.com/coaches.json`
    );
    const resopnseData = await response.json();

    if (!response.ok) {
      //error
    }
    const coaches = [];
    for (const key in resopnseData) {
      const coach = {
        id: key,
        firstName: resopnseData[key].firstName,
        lastName: resopnseData[key].lastName,
        description: resopnseData[key].description,
        hourlyRate: resopnseData[key].hourlyRate,
        areas: resopnseData[key].areas,
      };
      coaches.push(coach); 
    }
    context.commit('setCoaches', coaches);
  },
};
