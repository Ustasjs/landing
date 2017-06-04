




  ymaps.ready(function () {

    var myMap,
    placeMark,
    Lubyanka,
    Tverskaya,
    Prud;

    myMap = new ymaps.Map("yMap", {
      center: [55.76, 37.63],
      zoom: 15
    });

    myMap.behaviors.disable('scrollZoom');


    var placeCollection = new ymaps.GeoObjectCollection();

    Lubyanka = new ymaps.Placemark([55.759314, 37.631047], {
     hintContent: 'Mr.Burger - Лубянка', balloonContent: 'Ресторан на Лубянке'
     }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icons/map-marker.svg',
      iconImageSize: [47, 59]
     });

    Tverskaya = new ymaps.Placemark([55.766222, 37.604181], {
     hintContent: 'Mr.Burger - Лубянка', balloonContent: 'Ресторан на Лубянке'
     }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icons/map-marker.svg',
      iconImageSize: [47, 59]
     });

    Prud = new ymaps.Placemark([55.763543, 37.636144], {
     hintContent: 'Mr.Burger - Лубянка', balloonContent: 'Ресторан на Лубянке'
     }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icons/map-marker.svg',
      iconImageSize: [47, 59]
     });

    placeCollection.add(Lubyanka);
    placeCollection.add(Tverskaya);
    placeCollection.add(Prud);

    myMap.geoObjects.add(placeCollection);

    myMap.setBounds(placeCollection.getBounds());


  });