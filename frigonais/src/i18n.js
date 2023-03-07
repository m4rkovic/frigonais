import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// translations are located in
// public/locales/{language}/translation.json
//
// to use translated strings you need to:
// 
// import { t } from "i18next"
//
// {t('the-string-to-print')}

i18next
    .use(initReactI18next)
    .use(Backend)
    .init({
        load: "languageOnly",
        fallbackLng: 'sr'
        })