/*eslint-disable strict*/

const React = require('react');
const Header = require('./common/header');
const RouteHandler = require('react-router').RouteHandler;
const $ = jQuery = require('jquery');

const App = React.createClass({
    render: function() {     
      return (
        <div>
          <Header />
          <div className="container-fluid">
            <RouteHandler />
          </div>          
        </div>
      );
    }
});

module.exports = App;