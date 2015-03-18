// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Details = require('Details');

var Login = React.createClass({

  render: function() {
    return (
      <Details>
        <section>
          <h1>Login</h1>
        </section>

        <section>
          <p>Typically the first thing a user does on a login screen is enter
          their username. So it makes sense to place focus on the username
          field so that it is ready and active. There should be no cognitive
          effort required to use our login screen.</p>

          <img src="img/desktop-login-02.png" alt="desktop login screen"/>

          <p>The mobile login page has the same look and feel, but is sized
          accordingly.  The dialog portion of the screen occupies the full
          width of the screen.  The footer information becomes stacked as
          necessary.  There is no scrolling on the login page.</p>

          <img src="img/cellphone-login-02.png" alt="phone login screen"/>

        </section>

        <section>
          <h2>General</h2>

          <p>Upon entering page, the page focus is placed in the username field.
          The user can then mouse, tab on the keyboard, or tap to the password
          field.</p>

          <h3>Expected elements</h3>
          <p>The company logo should be present on the login pages.
          Alternatively, if a product has an approved product logo, then it
          can be used instead of the company logo.</p>

          <p>The product name or application name is also prominent on the
          login page, immediately below the logo.</p>

          <p>Next are the username and password fields.</p>

          <p>Finally, the Login button should big and visible.  It should be
          the default button for the form so the user can press Enter on the
          keyboard to login.</p>

          <h3>Handling the Unexpected</h3>
          <p>Should the user tap on the Login button before entering their
          username or password, red error messages should be displayed
          indicating one or both of the fields requires input.</p>

          <p>In the case that the authentication sequence fails, for security
          reasons the error message cannot indicate which field was
          incorrectly entered.  The message must simply state that the
          username or password were not recognized.</p>

          <h3>Optional elements</h3>
          <p>The following fields are optional and can be used based on the
          needs of the application.</p>

          <dl>
            <dt>Forgot username</dt>
            <dd>allows a user to request assistance locating their username.</dd>

            <dt>Forgot password</dt>
            <dd>allows the user to request assistance resetting their password.</dd>

            <dt>Remember me</dt>
            <dd>allows a user to indicate they want the application to remember
            their login information to the extent allowed by the security
            requirements of the application.</dd>

            <dt>Sign up</dt>
            <dd>for applications which allow users to sign up for access, this
            link should take them to a page that either creates an account or
            submits a request for an account to be created.</dd>

            <dt>Footer</dt>
            <dd>contains the copyright, product version, terms of use, and
            privacy references.</dd>

            <dt>Background image</dt>
            <dd>most applications should include a background image for visual
            appeal.  However, if there are constraints, it is acceptable to
            use a solid light gray background.</dd>
          </dl>
        </section>

        <section>
          <h2>Variations</h2>

          <p>Given the diverse nature of applications, there are a few
          variations available for the login page.   The first example shows
          the login page without a background image.  The background image is
          gratuitous and is not required.  Applications that have limited space
          resources (such as embedded devices) may adopt such a style to keep
          the resource demands to a minimum.</p>

          <img src="img/desktop-login-03.png" alt="desktop login screen"/>

          <p>Here’s an example of the simple login screen on mobile devices.</p>

          <img src="img/cellphone-login-03.png" alt="cellphone login screen"/>

          <p>Finally, this shows a product example.  In this example, notice
          there are fewer options on the login dialog.  There are no “Remember me”,
          “Forgot Password?”, or “Don’t have an account?” links.  These features
          are not required.</p>

          <img src="img/desktop-login-01-oneview.png" alt="desktop login screen"/>

          <p>Another variation of the login page allows for the login target to
          be specified.  As an example, when logging into the Helion Eucalyptus
          application, the user must select the login target, either the Eucalyptus
          service or Amazon Web Services.  Such context may need to be presented
          on the login screen.</p>

          <p>This should not be confused with an Active Directory domain field.
          We recommend combining any directory service into the single login field
          either via an email address or a “domain\username” format.</p>
        </section>

        <section>
          <h2>Mobile</h2>

          <p>As shown in the examples, the login page on mobile should respond to
          the screen size and orientation appropriately.  It is important to put
          the focus in the username field and the keyboard should be open.  In
          addition, select the appropriate type of keyboard based on the format
          of your username field.  If the format is an email address, open the
          email keyboard.</p>
        </section>

        <section>
          <h2>Accessibility</h2>

          <p>The user must be able to navigate the login page without the use of
          a pointing device on a desktop.  If there is an error on input, there
          shall be red text that provides error feedback.</p>
        </section>

      </Details>
    );
  }

});

module.exports = Login;