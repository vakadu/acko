import $ from 'jquery';

class Tabs {

    constructor() {
        this.tabs = $('ul.tabs li a');
        this.tabContent = $('.tab-content');
        this.handleTabs();
    }

    handleTabs(){
        let that = this;
        this.tabs.click(function() {
            let id = $(this).attr('data-tab');

            that.tabs.removeClass("active");
            that.tabContent.removeClass('active');

            $(this).addClass('active');
            $("#"+id).addClass('active');
        })
    }
}

export default Tabs;
