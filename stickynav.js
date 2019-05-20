function setup_sticky_nav()
{
    var nav_element = document.getElementsByTagName("nav")[0];

    var trigger_height = nav_element.offsetTop;

    function update_nav()
    {
        if (window.pageYOffset >= trigger_height)
        {
            nav_element.classList.add("sticky");
        }
        else
        {
            nav_element.classList.remove("sticky");
        }
    }

    document.onscroll = update_nav;
}