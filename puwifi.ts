// fetch("http://10.0.0.11:8090/login.xml", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9,te;q=0.8",
//     "content-type": "application/x-www-form-urlencoded"
//   },
//   "referrer": "http://10.0.0.11:8090/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "mode=191&username=200303124264&password=bf%4066&a=1693126269967&producttype=0",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"

// });
import NetInfo from "@react-native-community/netinfo";
import { useEffect } from "react";
async function login(
  url: string = "http://10.0.0.11:8090/login.xml",
  username: string,
  password: string
) {
  try {
    // TODO Make this shot good
    const res = await fetch(url + "/login.xml", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,te;q=0.8",
        "content-type": "application/x-www-form-urlencoded",
      },
      referrer: url + ":8090/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body:
        "mode=191&username=" +
        username +
        "&password=" +
        encodeURIComponent(password) +
        "&a=1693126269967&producttype=0",
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });

    return res;
  } catch (error) {
    // TODO: Handle error
    console.log(error);
  }
}

async function logout(url: string, username: string, password: string) {
  try {
    // TODO Make this shot good
    fetch(url + "/logout.xml", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,te;q=0.8",
        "content-type": "application/x-www-form-urlencoded",
      },
      referrer: url + ":8090/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body:
        "mode=191&username=" +
        username +
        "&password=" +
        encodeURIComponent(password) +
        "&a=1693126269967&producttype=0",
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });
  } catch (error) {
    // TODO: Handle error
    console.log(error);
  }
}

let STOP = false;
let resObj: Response;
async function keep_alive(url: string, username: string, password: string) {
  useEffect(async() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // Check if the device is offline but connected to a host Wi-Fi network

      while (!STOP) {
        try {
          if (state.type === "wifi" && state.isConnected === false) {
            resObj = await login(url, username, password);
            //       console.log("4 sec");
            //       console.log(await resObj.text());
            //       await new Promise((resolve) => setTimeout(resolve, 1000 * 4));
          } else if (state.type === "wifi" && state.isConnected === true) {
            console.log("device is online and connected");
          }
        } catch (err) {
          console.log(err.message);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  // while (!STOP) {
  //   try {
  //     if ("seomtje") {
  //       resObj = await login(url, username, password);
  //       console.log("4 sec");
  //       console.log(await resObj.text());
  //       await new Promise((resolve) => setTimeout(resolve, 1000 * 4));
  //     } else {
  //       console.log("Connection still stable");
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }
}

function stop_keep_alive() {
  STOP = true;
}

export { login, logout, keep_alive, stop_keep_alive };
