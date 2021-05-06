import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  vn: {
    translation: {
      "Tên đăng nhập": "Tên đăng nhập hoặc Email",
      "Mật khẩu": "Mật khẩu",
      "Ghi nhớ": "Ghi nhớ mật khẩu",
      "Đăng nhập": "Đăng nhập",
      "Quên mật khẩu": "Quên mật khẩu",
      "Đăng kí": "Đăng kí",
      
    }
  },
  ja: {
    translation: {
      "Tên đăng nhập": "アカウント/メール",
      "Mật khẩu": "パスワード",
      "Ghi nhớ": "パスワードを保存",
      "Đăng nhập": "ログイン",
      "Quên mật khẩu": "パスワードを忘れた場合",
      "Đăng kí": "登録",
      
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vn",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;