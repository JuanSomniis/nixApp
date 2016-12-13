'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
//MY IMPORTS
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';

import {
  routeConfig
} from './app.config';
import constants from './app.constants';
import util from '../components/util/util.module';
//SERVICES
import bifrost from '../services/bifrost.service';
import pop from '../services/pop.service';
//COMPONENTS ROUTERS
import login from './login/login.component';
import menu from './menu/menu.component';
import master from './main/master/master.component';
//STYLESHEETS

import './app.styl';
import '../../node_modules/angular-material/angular-material.min.css'

angular.module('nixApp', [
  ngCookies, ngResource, ngSanitize, uiRouter,
  constants, util,ngMaterial, ngMessages,
  bifrost,pop,
  login,menu,master
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['nixApp'], {
      strictDi: true
    });
  });
