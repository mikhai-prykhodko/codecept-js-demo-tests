
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
	login: function() {
      this.see('Willkommen zurück');
	  this.fillField({id :'login__email'},'wp321-qatestassignment@ds24-stage.de');
	  this.fillField({id :'login__password'},'@%J1Pzjprx');
	  this.click('#login__login-button');
	  this.see('My Tickets')
    }
	
	
	
  });
}
