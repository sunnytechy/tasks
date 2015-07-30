var React = require('react/addons');

var Component = React.createClass({
    render: function () {
        return (
            <section className="section-home container">
                <div className="row">
                    <div className="col-sm-7">
                        <h1 className="page-header">Admin</h1>
                    </div>
                </div>
            </section>
        );
    }
});


module.exports = Component;
