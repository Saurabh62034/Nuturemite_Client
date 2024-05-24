import axios from "axios";
const base_url = "https://nuturemite-back.onrender.com/";

export async function SignupFunction({ email, username, password }) {
  const response = await axios.post(`${base_url}signup`, {
    email,
    username,
    password,
  });
  return response;
}

export async function LoginFunction({ username, password }) {
  const response = await axios.post(`${base_url}login`, {
    username,
    password,
  });
  return response;
}

export async function UpdateCartFunction({ token, cartProducts }) {
  const response = await axios.post(
    `${base_url}cart`,
    {
      cartProducts,
    },
    {
      headers: {
        token,
      },
    }
  );
  return response;
}

export async function updateOrdersFunction({ token, cartProducts }) {
  const response = await axios.post(
    `${base_url}orders`,
    {
      cartProducts,
    },
    {
      headers: {
        token: token,
      },
    }
  );
  return response;
}

export async function getOrders({ token }) {
  const response = await axios.get(`${base_url}getOrders`, {
    headers: {
      token: token,
    },
  });
  return response;
}
