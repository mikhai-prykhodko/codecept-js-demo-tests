let to_mail = 'test@users.com';
let cc_mail = 'test_cc@users.com';
let bcc_mail = 'test_bcc@users.com';
let subject = 'TA Subject #' + Math.floor(Math.random() * 100000) + 1;

Feature('Mindk test');

Before((I) => {
  I.amOnPage('/');
});


Scenario('Create Ticket', (I) => {
  console.log(process.env.SUPER_SECRET);
  I.login();
 
  I.see('New Ticket');
  
  I.click({xpath:'//span[.="New Ticket"]'});
  I.see('New Ticket',locate('h2').withText('New Ticket'));
  I.fillField({id: 'ticket-reply-to'},`${to_mail}`);
  I.fillField({id: 'ticket-reply-cc'},`${cc_mail}`);
  I.fillField({id: 'ticket-reply-bcc'},`${bcc_mail}`);
  I.fillField({id: 'ticket-reply-subject'},`${subject}`);
  I.click('SEND');
  I.click('OK');
  //I.wait('1');
  I.waitForElement({xpath:'//span[.="Creating ticket ..."]'},10);
  I.waitUntilExists({xpath:'//span[.="Creating ticket ..."]'},40);
  I.click('My Recent History');
  I.seeElement({xpath: '//tr[td[.="'+`${subject}`+'"]][td[.="Pending"]][td[.="Updated status"]]'})
});


Scenario('Change Status check', (I) => {
  I.login();
  I.click('My Recent History');
  I.seeElement({xpath: '//tr[td[.="'+`${subject}`+'"]][td[.="Pending"]][td[.="Updated status"]]'});
  I.click({xpath: '//tr[td[.="'+`${subject}`+'"]][td[.="Pending"]][td[.="Updated status"]]'});
  I.click('RESOLVE');
  //I.waitForElement({xpath:'//span[.="Ticket updated."]'},10);
  I.waitUntilExists({xpath:'//span[.="Ticket updated."]'},20);
  I.seeElement({xpath: '//tr[td[.="'+`${subject}`+'"]][td[.="Resolved"]][td[.="Updated status"]]'});
});
