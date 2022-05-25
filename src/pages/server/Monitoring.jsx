const Monitoring = () => {
    return (
        <div>
            <p>
                Мониторинг — это сбор метрик и представление этих метрик в удобном виде (таблицы, графики, шкалы,
                уведомления, отчёты). Концептуально его можно изобразить в таком виде: сбор каких-то метрик, какое-то
                преобразование, какое-то представление.
            </p>
            <p>
                <img src="/img/server/1.png" alt="Trait conflict resolving" width={500} style={{float: "left"}}/>
                Есть критерии, позволяющие определить работоспособность сервера в целом и следить за состоянием
                приложений. Эти критерии обобщаются понятием Observability - способность сервера/приложения быть
                наблюдаемым. Позволяет оповестить о проблеме и ускорить процесс решения.
            </p>
            <p style={{clear: 'both'}}>
                <img src="/img/server/3.png" alt="Trait conflict resolving" width={500} style={{float: "left"}}/>
                Сервер должен быть доступным для диагностики его состояния: апи health check, обратившись к которому
                сервер отправит ответ о состоянии ключевых составляющих приложения: соединение с базой, другие сервисы,
                с которым приложение работает и прочее. В приложении может быть для этого отдельный модуль, который
                опрашивает все составные части системы и агрегирует результат. Собранная информация поступает
                заинтересованным лицам в удобном виде: дашборды, емаил-оповещения и т.д.
            </p>
            <p style={{clear: 'both'}}>
                <img src="/img/server/2.png" alt="Trait conflict resolving" width={500} style={{float: "left"}}/>
                Приложение должно писать логи. Можно реализовать самостоятельно: запись в базу и визуализация в
                интерфейсе.
                Из наиболее часто используемых готовых решений это «ELK» — это аббревиатура трех проектов с открытым
                исходным кодом: Elasticsearch, Logstash и Kibana. Elasticsearch — поисковая и аналитическая система.
                Logstash — это конвейер обработки данных на стороне сервера, который одновременно принимает данные из
                нескольких источников, преобразует их, а затем отправляет в хранилище, такой как Elasticsearch. Kibana
                позволяет пользователям визуализировать данные с помощью диаграмм и графиков в Elasticsearch.
            </p>
            <p style={{clear: 'both'}}>
                <img src="/img/server/14.png" alt="Trait conflict resolving" width={500} style={{float: "left"}}/>
                Метрики — это абстракция, с которой мы имеем дело, когда говорим о мониторинге. Это какие-то числа,
                описывающие состояние интересующего нас объекта: сервер, приложение, отдельный сервис. Самый простой и
                понятный мониторинг следит за
                ресурсами компьютера: загрузкой процессора, памяти, диска, сети. Аналогично можно следить за чем-то
                более высокоуровневым, вроде количества посетителей на сайте или среднего времени ответа сервера. Для
                компьютера это один хрен безликие числа.
            </p>
            <p style={{clear: 'both'}}>
                <h3>Пример простейшего мониторинга</h3>
                <img src="/img/server/4.png" alt="Trait conflict resolving" height={350} style={{float: "left"}}/>
                <img src="/img/server/5.png" alt="Trait conflict resolving" height={350} style={{float: "left"}}/>
            </p>
            <p style={{clear: 'both'}}>
                <h3>Инструменты</h3>
                <img src="/img/server/6.png" alt="Trait conflict resolving" height={350} style={{float: "left"}}/>
                <img src="/img/server/7.png" alt="Trait conflict resolving" height={350} style={{float: "left"}}/>
                <img src="/img/server/8.png" alt="Trait conflict resolving" height={350} style={{float: "left"}}/>
                <img src="/img/server/9.png" alt="Trait conflict resolving" height={350} style={{float: "left"}}/>
                <img src="/img/server/10.png" alt="Trait conflict resolving" height={350} style={{float: "left"}}/>
            </p>
            <p style={{clear: 'both'}}>
                <h3>Примеры инструментов с сборе</h3>
                <img src="/img/server/11.png" alt="Trait conflict resolving" height={500} style={{float: "left"}}/>
                <img src="/img/server/12.png" alt="Trait conflict resolving" height={500} style={{float: "left"}}/>
            </p>
            <p style={{clear: 'both'}}>
                <h3>Prometheus</h3>
                <img src="/img/server/13.png" alt="Trait conflict resolving" height={600} style={{float: "left"}}/>
            </p>
        </div>
    );
};

export default Monitoring;