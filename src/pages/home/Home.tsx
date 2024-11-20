import './home.sass';

export function Home() {
    return (
        <div className="Home container">
            <section className="first__section">
                <div className="text__container">
                    <img src="/banner.png" alt="" />
                    <h1>Поиск тиммейта | MVP</h1>
                    <p>Добро пожаловать на сервер MVP! Это место для игроков, которые ищут команду для популярных онлайн-игр. Независимо от того, играешь ли ты в Brawl Stars, Fortnite, CS2 или что-то другое, здесь ты сможешь найти подходящих тиммейтов и друзей по интересам. На сервере у нас есть тематические каналы для разных игр, где ты можешь обсудить стратегии, делиться опытом и находить игроков с похожими уровнями. Присоединяйся к MVP и сделай свой игровой процесс еще интереснее вместе с командой!</p>
                    <a href="https://discord.gg/teamate" target='_blank' className='link__btn'>Присодениться сейчас</a>
                </div>
            </section>
        </div>
    );
};