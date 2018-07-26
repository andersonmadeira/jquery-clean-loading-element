(function ($) {

    $.fn.loadingBox = function (action, options) {

        var settings = $.extend({
            // These are the defaults.
            primaryColor: "#3498db", // hex
            secondaryColor: '#f3f3f3', // hex
            width: 5, // pixels
            radius: 0, // pixels
            speed: 0.5, // seconds
        }, options);

        return this.each(function () {

            if (action === 'add') {
                $loadingBox = $("<div class='loading-box'></div>");
                $spinnerWrapper = $("<div class='spinner-wrapper'></div>");
                $spinner = $("<div class='spinner'>");

                parentHeight = $(this).height() + 5;
                parentWidth = $(this).width();

                if ( settings.radius === 0 )
                    settings.radius = (parentHeight > parentWidth) ? parentWidth / 3.0 : parentHeight / 3.0;

                console.log(settings.width);

                $spinner.css({
                    'opacity': '1',
                    'display': 'inline-block',
                    'border': settings.width + 'px solid ' + settings.secondaryColor,
                    'border-top': settings.width + 'px solid ' + settings.primaryColor,
                    'border-radius': '50%',
                    'width': settings.radius + 'px',
                    'height': settings.radius + 'px',
                    'animation': 'spin ' + settings.speed + 's linear infinite',
                });

                $spinnerWrapper.css({
                    'text-align': 'center',
                    'display': 'table-cell',
                    'vertical-align': 'middle',
                });

                $loadingBox.css({
                    'display': 'table',
                    'opacity': '0.7',
                    'z-index': '9999',
                    'position': 'absolute',
                    'left': '0',
                    'top': '0',
                    'background': '#fff',
                    'height': parentHeight + 'px',
                    'width': parentWidth + 'px'
                });

                $spinnerWrapper.append($spinner);
                $loadingBox.append($spinnerWrapper);

                $(this).prepend($loadingBox);
            }

            if (action === 'rm') {
                $(this).find('.loading-box').remove();
            }

        })

    };

}(jQuery));