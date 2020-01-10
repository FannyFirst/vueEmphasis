import lifeCycle from "../../components/lifeCycle/lifeCycle";
import vuex from "../../components/vuex/vuex";
import doublyBind from "../../components/doublyBind/doublyBind";
import keepAlive from "../../components/keepAliveV/keepAlive";
import dataTransport from "../../components/dataTransport/dataTransport";
import routerInstance from "../../components/routerInstance/routerInstance";
import customize from "../../components/customize/customize";
import filter from "../../components/filterV/filterV";
import history from "../../components/routerInstance/history";
import query from "../../components/routerInstance/query";
import meta from "../../components/routerInstance/meta";
import params from "../../components/routerInstance/params";
import children from "../../components/keepAliveV/children";
import children1 from "../../components/keepAliveV/children1";
import axios from "../../components/axios/axios"

export default [
  {
    path: '/',
    name: 'home',
  }, {
    name: "lifeCycle",
    path: "/lifeCycle",
    component: lifeCycle

  }, {
    name: "vModel",
    path: "/v_model",
    component: doublyBind
  }, {
    name: "dataTransport",
    path: "/data_transport",
    component: dataTransport
  }, {
    name: "router",
    path: "/router",
    component: routerInstance,
    children: [{
      name: "historyMode",
      path: "history",
      components: {
        childrenRouter: history
      }
    }, {
      name: "query",
      path: "query",
      components: {
        childrenRouter: query
      }
    }, {
      name: "params",
      path: "params",
      components: {
        childrenRouter: params
      }
    }, {
      name: "meta",
      path: "meta",
      components: {
        childrenRouter: meta
      },
      meta: {
        right: true
      }
    }]
  },
  {
    name: "customizeInstruction",
    path: "/customize",
    component: customize
  },
  {
    name: "filter",
    path: "/filterV",
    component: filter
  },
  {
    name: "keepAlive",
    path: "/keepAliveV",
    component: keepAlive,
    children: [
      {
        name: "nestedComponents",
        path: "nestedComponents",
        components: {
          nested: children
        }
      },{
        name: "nestedComponents1",
        path: "nestedComponents1",
        components: {
          nested: children1
        }
      },
    ]
  },
  {
    name: "vuex",
    path: "/vuex",
    component: vuex
  },
  {
    name: "axios",
    path: "/axios",
    component: axios
  }
]
