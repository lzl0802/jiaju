	    $('input[name=username]').blur(function() {
        val = this.value;

        if (val.length < 2) {
            $(this).data({
                's': 0
            });
            $(this).next().show();
        } else {
            $(this).data({
                's': 1
            });
            $(this).next().hide(); 
        }
    });
  

    $('input[name=email]').blur(function() {
        val = this.value;

        if (!val.match(/^\w+@\w+\.\w+$/i)) {
            $(this).data({
                's': 0
            });
            $(this).next().show();
        } else {
            $(this).data({
                's': 1
            });
            $(this).next().hide();
        }
    });
    $('input[name=phone]').blur(function() {
        val = this.value;

        if (!val.match(/^139\d{8}$/)) {
            $(this).data({
                's': 0
            });
            $(this).next().show();
        } else {
            $(this).data({
                's': 1
            });
            $(this).next().hide();
        }
    });
    $('form').submit(function() {

        $('.text').blur(); 
       

        tot = 0;
        $('.text').each(function() {
            tot += $(this).data('s');
        });
        if (tot != 3) {
            return false; 
            
        }
    });