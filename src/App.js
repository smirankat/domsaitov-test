import "./App.css";
import logo from "./img/logo.svg";
import arrow from "./img/arrow.png";
import balloon from "./img/balloon.png";
import paperPlane from "./img/paper-plane.png";
import copter from "./img/copter.png";
import rocket from "./img/rocket.png";
import image1 from "./img/image1.png";
import image5 from "./img/image5.png";
import check from "./img/check.png";
import bitrix from "./img/1c.png";
import wordpress from "./img/WordPress.png";
import joomla from "./img/Joomla.png";
import modx from "./img/modx.png";
import opencart from "./img/opencart.png";
import umicms from "./img/umicms.png";
import drupal from "./img/drupal.png";
import instant from "./img/instant.png";
import netcat from "./img/netcat.png";
import phpbb from "./img/phpBB.png";
import shopscript from "./img/shopscript.png";
import dle from "./img/DLE.png";
import hostcms from "./img/hostcms.png";
import prestashop from "./img/prestashop.png";
import arrow$ from "./img/arrow$.png";
import bag from "./img/bag.png";
import lock from "./img/lock.png";
import photo from "./img/photo.png";
import quotes from "./img/quotes.png";
import plus from "./img/plus.png";
import minus from "./img/minus.png";
import webmoney from "./img/webmoney.png";
import money from "./img/money.png";
import visa from "./img/visa.png";
import mastercard from "./img/mastercard.png";
import mir from "./img/mir.png";
import qiwi from "./img/qiwi.png";
import paypal from "./img/paypal.png";
import sberbank from "./img/sberbank.png";
import twitter from "./img/twitter.png";
import instagram from "./img/instagram.png";
import vk from "./img/vk.png";
import facebook from "./img/facebook.png";

// import TarifName from "./components/TarifName";
import Tarif from "./components/Tarif";
import CMSlogo from "./components/CMSlogo";
import SSLcard from "./components/SSLcard";
import DomainName from "./components/DomainName";
// import phone from "./img/phone.svg";
// import mail from "./img/mail.svg";
// import avatar from "./img/avatar.png";

const tarifs = [
  {
    id: 5,
    icon: balloon,
    name: "мини",
    desc: "2Gb места SSD",
    productivity: "",
    gift: "",
    price: "99",
  },
  {
    id: 6,
    icon: paperPlane,
    name: "старт",
    desc: "7Gb места SSD",
    productivity: "Повышенная производительность",
    gift: "Домен в подарок",
    price: "149",
  },
  {
    id: 7,
    icon: copter,
    name: "стандарт",
    desc: "30Gb места SSD",
    productivity: "Повышенная производительность",
    gift: "Домен в подарок",
    price: "290",
  },
  {
    id: 8,
    icon: rocket,
    name: "бизнес",
    desc: "50Gb места SSD",
    productivity: "Повышенная производительность",
    gift: "Домен в подарок",
    price: "470",
  },
];
const CMSlogos = [
  bitrix,
  wordpress,
  joomla,
  modx,
  opencart,
  umicms,
  drupal,
  instant,
  netcat,
  phpbb,
  shopscript,
  dle,
  hostcms,
  prestashop,
];
const SSLcards = [
  {
    id: 1,
    desc: `SSL для сайта
    Comodo PositiveSSL`,
    text: `Доступен физическим лицам
    Защита 1го домена
    Поддержка IDN доменов
    Низкая степень доверия
    Совместимость с браузерами: 96%
    Автоустановка на наш хостинг`,
    price: "900",
  },
  {
    id: 2,
    desc: `SSL для магазина
     Positive SSL MDC
     (3 domains)`,
    text: `Доступен физическим лицам
    Защита 3х доменов
    Опция добавления доменов
    Поддержка IDN доменов
    Достаточная степень доверия
    Совместимость с браузерами: 99.8%
    Автоустановка на наш хостинг`,
    price: "3800",
  },
  {
    id: 3,
    desc: `С защитой поддоменов
    Essential SSL Wildcard`,
    text: `Доступен физическим лицам
    Защита всех поддоменов
    Поддержка IDN доменов
    Достаточная степень доверия
    Совместимость с браузерами: 99.8%
    Автоустановка на наш хостинг`,
    price: "6700",
  },
  {
    id: 4,
    desc: `С зеленой строкой
    True BusinessID with EV`,
    text: `Только для юридических лиц
    Защита одного домена
    Зеленая адресная строка
    Наивысшая степень доверия
    Без поддержки IDN
    Совместимость с браузерами: 99.9%
    Автоустановка на наш хостинг`,
    price: "12600",
  },
];
const domainNames = [
  {
    id: 9,
    domain: ".RU",
    price: "600",
  },
  {
    id: 10,
    domain: ".SU",
    price: "900",
  },
  {
    id: 11,
    domain: ".NET",
    price: "1200",
  },
  {
    id: 12,
    domain: ".BIZ",
    price: "1200",
  },
  {
    id: 13,
    domain: ".MOSCOW",
    price: "500",
  },
  {
    id: 14,
    domain: ".РФ",
    price: "600",
  },
  {
    id: 15,
    domain: ".COM",
    price: "1200",
  },
  {
    id: 16,
    domain: ".ORG",
    price: "1200",
  },
  {
    id: 17,
    domain: ".INFO",
    price: "1200",
  },
  {
    id: 18,
    domain: ".MSC.RU",
    price: "500",
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="contacts">
            <div>
              <div className="contacts__phone">
                <div className="contacts__icon phone"></div>
                <div>
                  <p>+7 (495) 123-45-56</p>
                </div>
              </div>
              <div className="contacts__mail">
                <div className="contacts__icon mail"></div>
                <div>
                  <p>support@wshost.ru</p>
                  <span>(поддержка 24/7)</span>
                </div>
              </div>
            </div>
          </div>
          <button className="buy-btn">Купить хостинг</button>
          <div className="avatar"></div>
        </div>
      </header>
      <nav>
        <div className="wrapper">
          <a href="#!">ХОСТИНГ</a>
          <div className="line"></div>
          <a href="#!"> VPS</a>
          <div className="line"></div>
          <a href="#!"> РЕГИСТРАЦИЯ ДОМЕНОВ</a>
          <div className="line"></div>
          <a href="#!"> SSL</a>
          <div className="line"></div>
          <select>
            <option> ХОСТИНГ-ПРОВАЙДЕР</option>
            <option> ХОСТИНГ-ПРОВАЙДЕР</option>
          </select>
        </div>
      </nav>
      <main>
        <article className="intro">
          <div className="wrapper">
            <h1>Платный хостинг для сайта</h1>
            <section>
              <p>Совместим с любыми CMS:</p>
              <p>1С-Битрикс, Wordpress, Opencart, DLE, Joomla и др.</p>
              <p>Всё включено:</p>
              <p>PHP 5.4 – 8.0, Perl, FTP, MySQL, ISPManager</p>
            </section>
            <div className="intro__offer">
              <div className="good-deal">
                Всего от <span>99 ₽ в месяц!</span>
              </div>
              <div className="intro__dot"></div>
              <img className="intro__arrow" src={arrow} alt="arrow"></img>
              <button className="book-btn intro__btn">Заказать хостинг</button>
            </div>
          </div>
        </article>
        <article className="tarif">
          <div className="wrapper">
            <h2>Тарифы на хостинг</h2>
            <p>
              У нас оптимальные тарифы на классический виртуальный хостинг с
              безлимитными ресурсами на количество сайтов, баз данных и FTP.
            </p>
            <p>
              Выбирайте наш лучший <strong>безлимитный</strong> хостинг в
              России!
            </p>
            <p className="tarif__info">
              Неограниченно сайтов, баз данных MySQL, FTP аккаунтов и почтовых
              ящиков
            </p>
            {/* <div className="tarif__cards"> */}
            {/* <div className="tarif__names">
              {tarifs.map((obj) => (
                <TarifName key={obj.id} {...obj} />
              ))}
            </div> */}
            <div className="tarif__options">
              {tarifs.map((obj) => (
                <Tarif key={obj.id} {...obj} />
              ))}
            </div>
            {/* </div> */}
          </div>
        </article>
        <a className="more-details" href="#!">
          Посмотреть все характеристики нашего хостинга
        </a>
        <article className="benefits">
          <div className="wrapper">
            <img src={image1} alt="" />
            <div>
              <h2>Вместе с хостингом Вы получите</h2>
              <div className="benefits__text">
                <p>
                  <img src={check} alt="" />
                  30 дней на тестовый период + 100% возврат денег, если хостинг
                  не подойдёт
                </p>
                <p>
                  <img src={check} alt="" />
                  Хостинг в подарок при оплате тарифа на 1 год
                </p>
                <p>
                  <img src={check} alt="" />
                  Бесплатный перенос сайта от другого хостинг-провайдера
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="CMS">
          <div className="wrapper">
            <h2>Хостинг с поддержкой любой CMS</h2>
            <p>
              На нашем виртуальном хостинге вы сможете разместить сайт на{" "}
              <strong>любой CMS</strong>, а также установить в два клика любую
              популярную систему управлению сайтом
            </p>
            <section>
              {CMSlogos.map((obj) => (
                <CMSlogo key={obj} value={obj} />
              ))}
            </section>
          </div>
        </article>
        <article className="SSL">
          <div className="wrapper">
            <h2>SSL-сертификаты</h2>
            <p>
              Купить SSL и попасть в TOP Google. WSHOST предлагает низкие цены и
              быстрый выпуск за счет <strong>уникальных</strong> партнерских
              условий с удостоверяющими центрами.
            </p>
            <p>
              Подберите сертификат исходя из задач и предпочтений, удобные
              фильтры и описание помогут определиться
            </p>
            <section className="SSL__cards">
              {SSLcards.map((obj) => (
                <SSLcard key={obj.id} {...obj} />
              ))}
            </section>
            <button className="book-btn">Заказать SSL сертификат</button>
          </div>
        </article>
        <div className="domain-name-and-hosting">
          <article className="domain-name">
            <div className="wrapper">
              <h2>Доменные имена</h2>
              <div>
                <div>
                  <section className="domain-name__text">
                    <p>
                      Правильное название сайта — залог трафика и успешной
                      рекламы. Домен должен ассоциироваться у пользователя с
                      конкретными услугами или отраслью.
                    </p>
                    <p>
                      Часто говорят: «Посмотри на auto.ru» и становится понятно,
                      что речь про ресурс, который связан с автомобилями. Точно
                      так же и с другими сайтами, в имени которых заложен смысл
                      их деятельности.
                    </p>
                    <p>
                      Помимо основных, выделяют специальные - тематические зоны:
                      .travel, .site, .pro и т.д.
                    </p>
                  </section>
                  <button className="book-btn">
                    Подобрать и зарегистрировать домен
                  </button>
                </div>
                <section className="domain-name__tarifs">
                  {domainNames.map((obj) => (
                    <DomainName key={obj.id} {...obj} />
                  ))}
                </section>
              </div>
            </div>
          </article>
          <article className="hosting">
            <h2>Хостинг VPS/VDS серверов</h2>
            <div className="wrapper">
              <img src={image5} alt="" />
              <div>
                <div className="hosting__text">
                  <p>
                    Готовые тарифы VPS сбалансированы по производительности.
                    Индивидуальная конфигурация позволит получить оптимальное
                    количество ресурсов с оплатой за час.
                  </p>
                  <p>
                    Все тарифы VPS хостинга построены на оборудовании Xeon
                    Scalable Silver/Gold.
                  </p>
                  <p>
                    Серверы размещены в DDoS-защищенном кластере ЦОД Tier lll и
                    подключены к точке обмена трафиком Cloud-IX.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <article className="prices">
          <div className="wrapper">
            <div>
              <h2>Цены на VPS KVM</h2>
              <div className="prices__text">
                <p>На каждом VPS сервере для вас уже включено:</p>
                <p>
                  <img src={check} alt="" />
                  Root-доступ
                </p>
                <p>
                  <img src={check} alt="" />
                  Защиты от DDoS
                </p>
                <p>
                  <img src={check} alt="" />
                  Домен в подарок при оплате за 1 год
                </p>
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th>Start VPS</th>
                  <th>Optima VPS</th>
                  <th>Drive VPS</th>
                </tr>
                <tr>
                  <td>CPU</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>HDD</td>
                  <td>20 GB</td>
                  <td>40 GB</td>
                  <td>60 GB</td>
                </tr>
                <tr>
                  <td>₽ в месяц</td>
                  <td>350</td>
                  <td>450</td>
                  <td>950</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button className="VPS-btn">
                      Заказать <span>VPS</span>
                    </button>
                  </td>
                  <td>
                    <button className="VPS-btn">
                      Заказать <span>VPS</span>
                    </button>
                  </td>
                  <td>
                    <button className="VPS-btn">
                      Заказать <span>VPS</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
        <article className="profits">
          <h2>Выгоды нашего хостинга для Вас</h2>
          <div className="wrapper">
            <section className="profits__card">
              <img src={arrow$} alt="" />
              <h3>Низкие цены</h3>
              <p>
                Доступные цены всегда были приоритетом нашей компании.
                Партнерская программа поможет сэкономить ещё больше.
              </p>
            </section>
            <section className="profits__card">
              <img src={bag} alt="" />
              <h3>Грамотная поддержка</h3>
              <p>
                Сотрудники с многолетним опытом в сфере хостинг услуг всегда
                оперативно помогут решить возникшие у клиентов трудности.
              </p>
            </section>
            <section className="profits__card">
              <img src={lock} alt="" />
              <h3>Безопасность</h3>
              <p>
                Фильтрация паразитического трафика, защита от брут-форс атак
                помогут обеспечить сохранность данных клиентов.
              </p>
            </section>
          </div>
        </article>
        <article className="comments">
          <div className="wrapper">
            <section>
              <h2>Отзывы о нашем хостинге</h2>
              <div className="comments__text">
                <p>
                  Хостинг – наша работа! Более 10 лет мы размещаем сайты своих
                  клиентов на надёжном и современном оборудовании.
                </p>
                <p>Почитайте, что говорят наши клиенты</p>
              </div>
            </section>
            <section className="comments__comment">
              <img className="comments__quotes" src={quotes} alt="" />
              <p>
                «Пользуюсь хостингом уже около 8 лет. Хорошая цена и удобно что
                CPanel для управления. Поддержка помогает хорошо.»
              </p>
              <img className="comments__photo" src={photo} alt="" />
              <span>Петровна Мария Ивановна</span>
              <div>
                <span className="comments__dot"></span>
                <span className="comments__dot active"></span>
                <span className="comments__dot"></span>
              </div>
            </section>
          </div>
        </article>
        <article className="questions">
          <div className="wrapper">
            <h2>Вопросы и ответы</h2>
            <p>
              Здесь представлены самые популярные вопросы, которые задают нам
              клиенты перед оформлением заказа на виртуальный хостинг. Если вы
              не нашли ответ на имеющиеся у вас вопрос, задайте его нашим
              специалистам.
            </p>
            <section className="questions__items">
              <div className="question">
                <h3>
                  <img src={minus} alt="" />
                  Что такое SSL-сертификат?
                </h3>
                <p>
                  Это криптографический протокол для организации защищенного
                  соединения с вашим сайтом. Такие протоколы необходимы всем
                  сайтам, на которых происходит сбор любых данных и сведений,
                  есть формы обратной связи или другие формы для заполнения,
                  сайтам с высоким уровнем доверия (банки, новостные ресурсы,
                  интернет-магазины, форумы и т.д.). При отсутствии
                  HTTPS-соединения, любой браузер перед переадресацией на сайт
                  известит пользователя, о том, что соединение не безопасно. Это
                  значительно снижает конверсию сайта и приводит к потере
                  посетителей
                </p>
              </div>
              <div className="question">
                <h3>
                  <img src={plus} alt="" />
                  Немного о нас и наших услугах
                </h3>
              </div>
              <div className="question">
                <h3>
                  <img src={plus} alt="" />
                  Как выбрать SSL-сертификат?
                </h3>
              </div>
              <div className="question">
                <h3>
                  <img src={plus} alt="" />
                  Есть ли бесплатные SSL-сертификаты?
                </h3>
              </div>
              <div className="question">
                <h3>
                  <img src={plus} alt="" />
                  Как правильно выбрать тариф?
                </h3>
              </div>
            </section>
          </div>
        </article>
        <article className="payment">
          <div className="trail">
            <p>
              Получите <span>30 дней</span> на тестирование нашего хостинга{" "}
              <span>бесплатно</span>
            </p>
            <p>
              Плюс, <span>100% гарантия возврата</span> всех оплаченных денежных
              средств в этот период.
            </p>
            <button className="book-btn">Попробовать хостинг</button>
          </div>
          <div className="wrapper">
            <h2>Способы оплаты</h2>
            <p>
              Оплачивайте услуги виртуального хостинга WSHOST любым, удобным для
              вас методом. Наш хостинг также могут заказать и оплатить
              юридические лица безналичным переводом
            </p>
            <section>
              <div>
                <img src={webmoney} alt="" />
              </div>
              <div>
                <img src={money} alt="" />
              </div>
              <div>
                <img src={visa} alt="" />
              </div>
              <div>
                <img src={mastercard} alt="" />
              </div>
              <div>
                <img src={mir} alt="" />
              </div>
              <div>
                <img src={qiwi} alt="" />
              </div>
              <div>
                <img src={paypal} alt="" />
              </div>
              <div>
                <img src={sberbank} alt="" />
              </div>
            </section>
          </div>
        </article>
      </main>
      <footer>
        <div className="wrapper">
          <div>
            <section className="footer__description">
              <img src={logo} alt="" />
              <p>
                WSHOST даёт возможность купить хостинг сайтов дешево с SSL и
                полноценным пакетом услуг. Дешевая регистрация доменов и
                недорогой хостинг позволяют создать сайт любой тематики. Мы
                занимаем лидирующие позиции в даной сфере. Нашими клиентами
                являются жители городов Москва, Санкт-Петербург и т.д. Выбирая
                наш php хостинг вы получаете премиум услуги по низкой цене.
              </p>
            </section>
            <section className="footer__contacts">
              <div>
                <div className="footer__contacts_icon phone"></div>
                <span>Телефон в Москве:</span>
              </div>
              <p>+7 (495) 123-45-56</p>
              <div>
                <div className="footer__contacts_icon mail"></div>
                <span>Электронная почта</span>
              </div>
              <p>support@wshost.ru</p>
              <div>
                <div className="footer__contacts_icon location"></div>
                <span>Адрес дата-ценра и офиса продаж</span>
              </div>
              <p>г. Москва, Варшавское шоссе, д. 125</p>
              <p>Tехническая поддержка работает 24/7</p>
            </section>
            <section className="footer__social">
              <div>
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={vk} alt="" />
                <img src={facebook} alt="" />
              </div>
              <button className="report_spam">Report Spam</button>
            </section>
            <section className="footer__about">
              <h3>О компании</h3>
              <p>
                О хостинг-провайдере
                <br />
                Партнёрская программа
                <br />
                Дата-центр
                <br />
                Документы для клиентов
                <br />
                Договор на услуги хостинга
                <br />
                Способы оплаты
                <br />
                Цены
                <br />
                Акции
                <br />
                Новости
                <br />
                Вакансии
                <br />
                Контакты
              </p>
            </section>
            <section className="footer__services">
              <h3>Наши услуги</h3>
              <p>
                Виртуальный хостинг
                <br />
                Хостинг для 1С-Битрикс
                <br />
                Хостинг для Wordpress
                <br />
                Аренда VPS
                <br />
                Регистрация доменов
                <br />
                SSL сертификаты
                <br />
                Конструктор сайтов
              </p>
            </section>
          </div>
          <div>
            <p>© 2007-2021 ООО "Вебсайт хостинг". Все права защищены.</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
