<div class="menu_left_panel">

    <ul>
        <li class="{{ (Route::current()->getName() == 'member') ? 'active' : '' }}"><a href="{{ url('member') }}"><i class="fa fa-user" aria-hidden="true"></i><span>Member</span></a></li>
<!--         <li><a href="javascript:;"><i class="fa fa-sitemap" aria-hidden="true"></i><span>Workflow</span></a></li>
        <li><a href="javascript:;"><i class="fa fa-search" aria-hidden="true"></i><span>Generate Product</span></a></li>
        <li><a href="javascript:;"><i class="fa fa-cube" aria-hidden="true"></i><span>Product</span></a></li>
        <li><a href="javascript:;"><i class="fa fa-line-chart" aria-hidden="true"></i><span>Job</span></a></li> -->
        <li class="{{ (Route::current()->getName() == 'ordermonitor') ? 'active' : '' }}"><a href="{{ url('ordermonitor') }}"><i class="fa fa-puzzle-piece" aria-hidden="true"></i><span>Ordermonitor</span></a></li>
        <li class="{{ (Route::current()->getName() == 'ordermagement') ? 'active' : '' }}"><a href="{{ url('ordermagement') }}"><i class="fa fa-line-chart" aria-hidden="true"></i><span>Ordermagement</span></a></li>
       
        
    </ul>
</div>