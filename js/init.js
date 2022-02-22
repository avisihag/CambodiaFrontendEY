import MDCMenu from '@material/menu';
import MDCDialog from '@material/dialog';

(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space



const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;

const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));