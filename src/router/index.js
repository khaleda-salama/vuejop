import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/HomeView.vue";
import jobs from "@/views/jobsView.vue";
import NotFound from "@/views/NotFound.vue";
import job from "@/views/jobView.vue";
import Addjob from "@/views/AddjobView.vue";
import Editjob from "@/views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: jobs,
    },
    {
      path: "/job/:id",
      name: "job",
      component: job,
    },
    {
      path: "/add/job",
      name: "add-job",
      component: Addjob,
    },
    {
      path: "/job/edit/:id",
      name: "edit-job",
      component: Editjob,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
