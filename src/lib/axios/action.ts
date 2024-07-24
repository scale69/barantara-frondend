"use server"

import instance from "./instance"



export async function fetchTopPost() {
    try {
        const res = await instance.get('/api/posts?pagination[limit]=3&sort[0]=createdAt:desc&&populate=*')
        const data = await res.data?.data
        return data
    } catch (error) {
        return console.log(error);
    }
}
export async function fetchSosmed() {
    try {
        const res = await instance.get('/api/sosial-medias?populate=*')
        const data = await res.data?.data
        return data
    } catch (error) {
        return console.log(error);
    }
}
export async function fetchTopTrending() {
    try {
        const res = await instance.get('/api/posts?filters[trending][$eq]=true&pagination[limit]=3&sort[0]=createdAt:desc&&populate=*')
        const data = await res.data?.data
        return data
    } catch (error) {
        return console.log(error);
    }
}

export async function fetchPost() {
    try {
        const res = await instance.get('/api/posts?pagination[limit]=10&sort[0]=createdAt:desc&&populate=*')
        const data = await res.data?.data
        return data
    } catch (error) {
        return console.log(error);
    }
}

export const fetchTrending = async () => {
    try {
        const { data } = await instance.get('/api/posts?filters[trending][$eq]=treu&&populate=*');
        return await data?.data;
    } catch (error) {
        return console.log(error);
    }
};

export async function fetchSlide() {
    try {
        const res = await instance.get('/api/slides?populate=*')
        const data = await res.data?.data
        return data
    } catch (error) {
        return console.log(error);
    }
}

export async function fetchMobileAds() {
    const res = await instance.get('/api/ads?populate=*')
    const data = await res.data?.data
    return data
}
export async function fetchALLAds() {
    const res = await instance.get('/api/ads?populate=*')
    const data = await res.data?.data
    return data
}
export async function fetchAbout() {
    const res = await instance.get('/api/abouts?populate=*')
    const data = await res.data?.data
    return data
}



export const fetchTags = async (titleCategory : string) => await instance.get(`/api/tags?populate=*&&filters[beritas][category][$contains]=${titleCategory}`).then(res => res.data?.data).catch(error => console.log(error))
export const filterSosmed = async (sosmed : string) => await instance.get(`/api/sosial-medias?filters[aplikasi][$eq]=${sosmed}`).then(res => res.data?.data).catch(error => console.log(error))
export const filterTags = async (name : string) => await instance.get(`/api/tags?filters[name][$contains]=${name}&&populate=deep`).then(res => res.data?.data).catch(error => console.log(error))
export const FetchAds = async (position : string) => await instance.get(`/api/ads?filters[posisi][$eq]=${position}&pagination[limit]=20&&populate=*`).then(res => res.data?.data).catch(error => console.log(error))
export const filterPost = async (slug : string) => await instance.get(`/api/posts?filters[slug][$eqi]=${slug}&&populate=*`).then(res => res.data?.data).catch(error => console.log(error))
export const filterSubNews = async (subNews : string) => await instance.get(`/api/posts?filters[category][$contains]=${subNews}&pagination[limit]=8&sort[0]=createdAt:desc&&populate=*`).then(res => res.data?.data).catch(error => console.log(error))
export const filterSubBerita = async (url : string) => await instance.get(url).then(res => res.data).catch(error => console.log(error))