import {
  gapi,
  loadAuth2,
  loadClientAuth2,
  loadAuth2WithProps,
} from 'gapi-script'

async function OauthLogin() {
  function start() {
    gapi.client.init({
      client_id: client_id,
      scope: '',
    })

    gapi.load('client:auth2', start)
  }

  const onSuccess = (res) => {
    console.log(`Login successful! `)
  }

  const onFailure = (res) => {
    console.log(`Login failed. ${res}`)
  }

  return (
    <button id="OauthLogin">
      <GoogleLogin
        clientId={client_id}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        className="w-full mt-5 self-center justify-center bg-white rounded text-gray-600 hover:bg-opacity-90 hover:text-dark-purple transition font-semibold text-lg cursor-pointer py-2"
      />
    </button>
  )
}

export default OauthLogin
