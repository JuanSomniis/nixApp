//Librerias a usar
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './login.routes';


export class LoginComponent {
  /*@ngInject*/
  constructor($bi,$pop) {
    //Se declaran dependencias /*SERVICIOS*/
    this.$bi = $bi;
    this.$pop = $pop;
  }
  /*FUNCTIONS */
  login(){ // => Funcion login donde valida si las credenciales son validas
    //Variable donde se construye el array de where's
    let whereArray = [
      { correo :  this.model.correo},
      { pass :  this.model.pass}
    ]
    //Se hace la consulta a la base de datos
    this.$bi.usuario().find(whereArray).then(response=>{
      //Se guarda el tamaño del data segun response
      let dataLength = response.data.length
      //En caso que el tamaño del data sea mayor a uno
      if(!dataLength)
        this.$pop.show('Credenciales incorrectas')
      else
        this.$pop.show('Credenciales correctas')
    });
  }
  /* VARIABLES*/
  $onInit() {
    this.model = new Object();
  }
}

export default angular.module('nixApp.login', [uiRouter])
  .config(routes)
  .component('login', {
    template: require('./login.html'),
    controller: LoginComponent
  })
  .name;
