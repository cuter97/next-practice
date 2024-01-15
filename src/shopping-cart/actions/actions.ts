import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {

    if (hasCookie('cart'))
        return JSON.parse(getCookie('cart') as string ?? '{}');

    return {}
}

export const addProductToCart = (id: string) => {
    const cookieCart = getCookieCart();

    if (cookieCart[id]) cookieCart[id] += 1;
    else cookieCart[id] = 1;

    setCookie('cart', JSON.stringify(cookieCart));
}

export const removeProductFromCart = (id: string) => {
    const cookieCart = getCookieCart();
    delete cookieCart[id];
    setCookie('cart', JSON.stringify(cookieCart));
}

export const removeSingleItemFromCart = (id: string) => {
    const cookieCart = getCookieCart();
    if (!cookieCart[id]) return;

    const itemInCart = cookieCart[id] - 1;

    if (itemInCart <= 0) delete cookieCart[id];
    else cookieCart[id] = itemInCart;

    setCookie('cart', JSON.stringify(cookieCart));
}