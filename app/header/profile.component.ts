import {Component} from 'angular2/core';

@Component({
    selector: '[profile]',
    template: `
    <!-- User Account: style can be found in dropdown.less -->          
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
        <span class="hidden-xs">Alexander Pierce</span>
    </a>
    <ul class="dropdown-menu">
        <!-- User image -->
        <li class="user-header">
        <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

        <p>
            Alexander Pierce - Web Developer
            <small>Member since Nov. 2012</small>
        </p>
        </li>
        <!-- Menu Body -->
        <li class="user-body">
        <div class="row">
            <div class="col-xs-4 text-center">
            <a href="#">Followers</a>
            </div>
            <div class="col-xs-4 text-center">
            <a href="#">Sales</a>
            </div>
            <div class="col-xs-4 text-center">
            <a href="#">Friends</a>
            </div>
        </div>
        <!-- /.row -->
        </li>
        <!-- Menu Footer-->
        <li class="user-footer">
        <div class="pull-left">
            <a href="#" class="btn btn-default btn-flat">Profile</a>
        </div>
        <div class="pull-right">
            <a href="#" class="btn btn-default btn-flat">Sign out</a>
        </div>
        </li>
    </ul>
    `,
    host: {
        "(click)": "toggle()",
        "[class.open]": "open"
    } 
})

/**
 * ProfileComponent
 */
export class ProfileComponent {
    public open = false;
    public toggle = () => {
        this.open = !this.open;
    }
}