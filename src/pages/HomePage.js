//import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
	signInWithRedirect,
	auth,
	provider,
	getRedirectResult,
	onAuthStateChanged,
} from "../config";
import   Avartar 	from "../Components/Avartar";

//create our home component => HomePage component...

const Home = () => {
	const [signedIn, setSignedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [authenticated, setAuthenticated ] = useState(true);
	//Sign in to google through firebase
	const signIn = (event) => {
		event.preventDefault();
		signInWithRedirect(auth, provider);
	};
  
	//Sign out of google through firebase
	const signOut = (event) => {
		event.preventDefault();
		auth.signOut().then(() => {
			
		});
	}



	//Get the redirect result
	useEffect(() => {
		//const auth = getAuth();
		getRedirectResult(auth)
			.then((result) => {
				//Get the result of the redirect
				if (result) {
					console.log(result.user);
					//Set the user
					setSignedIn(true);
				} else {
					//....
				}
			})
			.catch((error) => {
				// Handle Errors here.
				console.log(error);
			});
	}, []);

	//Check auth state
	useEffect(() => {
		//Check auth state

		onAuthStateChanged(auth, (user) => {
			if (user) {
				//Set the user
				const { displayName, email, photoURL, uid } = user;
				setUser({ displayName, email, photoURL, uid });
				setAuthenticated(true);
				// ...
			} else {
				// User is signed out
				// ...
				setUser(null);
				setAuthenticated(false);
			}
		});
	}, []);

	return (
		<section className="home-page ">
			{user ? (
				
					authenticated ? <div>
						<div>
					<div className="auth-title"> Welcome, you are signed in!</div>
					<div><Avartar image={user.photoURL} /></div>
					
					<div>{user.displayName}</div>
					<div>{user.email}</div>
					<button onClick={signOut} className="auth-btn">
							Sign Out
						</button>
				</div>
						 </div> : 
						 <div>
							Please Wait.....
						 </div>
				
			) : (
				<div>
					<div style={signedIn ? {} : { display: "none" }}>
						Sign In Successful!{" "}
					</div>
					<div className="auth-container">
						<div className="auth-title">Sign in to access your account</div>
						<button onClick={signIn} className="auth-btn">
							Sign In
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Home;
