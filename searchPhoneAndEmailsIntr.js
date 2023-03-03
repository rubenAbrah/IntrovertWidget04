searchPhoneAndEmailsIntr = function () {
  var widget = this;
  this.code = null;

  this.yourVar = {};
  this.yourFunc = function () { };

  // вызывается один раз при инициализации виджета, в этой функции мы вешаем события на $(document)
  this.bind_actions = function () {
    //пример $(document).on('click', 'selector', function(){});
  };

  // вызывается каждый раз при переходе на страницу
  this.render = function () {
    let phonesAndEmails = document.querySelectorAll('div[data-pei-code="phone"].js-linked-has-value , div[data-pei-code="email"].js-linked-has-value');
    phonesAndEmails.forEach(el=> {
      let elValue =  el.querySelector('.js-linked-pei.text-input').value.replaceAll(" ", "")
      el.querySelector('.tips__inner.custom-scroll ').innerHTML += `
    <div class="tips-item js-tips-item js-cf-actions-item "  data-id="" data-forced="" data-value="" data-suggestion-type="">
    <a href="https://yandex.ru/search/?text=${elValue}" target="_blank" onclick="window.open('http://letmegooglethat.com/?q=${elValue}/')" ></a>
    <span class="tips-icon-container">
    
      <span class="tips-icon tips-svg-icon">
        <svg class="svg-icon svg-common--copy-dims">
          <use xlink:href="#common--filter-search"></use>
    
        </svg>
      </span> 
    </span> 
    Нагуглить
    </div>`})
   };

  // вызывается один раз при инициализации виджета, в этой функции мы загружаем нужные данные, стили и.т.п
  this.init = function () {

  };

  // метод загрузчик, не изменяется
  this.bootstrap = function (code) {
    widget.code = code;
    // если frontend_status не задан, то считаем что виджет выключен
    // var status = yadroFunctions.getSettings(code).frontend_status;
    var status = 1;

    if (status) {
      widget.init();
      widget.render();
      widget.bind_actions();
      $(document).on('widgets:load', function () {
        widget.render();
      });
    }
  }
};
// создание экземпляра виджета и регистрация в системных переменных Yadra
// widget-name - ИД и widgetNameIntr - уникальные названия виджета
yadroWidget.widgets['searchPhoneAndEmails-Introvert'] = new searchPhoneAndEmailsIntr();
yadroWidget.widgets['searchPhoneAndEmails-Introvert'].bootstrap('searchPhoneAndEmails-Introvert');





 
