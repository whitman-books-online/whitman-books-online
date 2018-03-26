import parseOneAddress from 'email-addresses';

const auth = {
  profile: null,
  valid: true,
  authenticate(response) {
    console.log(response);
    const profile = response.profileObj;
    const email = profile.email
    const email_ast = parseOneAddress(email);
    const domain = email_ast.addresses[0].domain;
    const isValid = domain === 'whitman.edu';
    if (isValid) {
      auth.profile = profile;
    }
  },
  signout(cb) {
    auth.profile = null;
  }
};

export default auth;
