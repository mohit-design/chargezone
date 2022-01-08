$(function() {
  $(".form-calculated-amount").slideUp(700);
  $("input[class='input-pay']").change(function() {
    if (this.value == 'amount') {
      $(".form-calculated-amount").slideUp(700);
    }
    else if (this.value == 'calculated-amount') {
      $(".form-calculated-amount").slideDown(700);
    }
  });
});