
import './detall.scss';
import bg from './svg/Simplification.png'

const Detall = () => {
  return (
    <div className="detall-conteiner">
      <img src={bg} alt="" className='bgImg'/>
      <h1>Юсуф Абдурахманов</h1>
      <div className="text">
        <p>Проект получил престижную награду за инновационные образовательные технологии.</p>
        <p>
          Мы рады сообщить, что наш проект стал победителем Премии за Инновационные Образовательные Технологии в категории
          Лучшие цифровые решения для образования. Эта награда признала наши усилия в области создания технологий,
          которые значительно меняют образовательный процесс и делают его более доступным и эффективным.
        </p>
        <p>
          В ходе реализации проекта, в котором приняли участие более 10,000 студентов из разных регионов, мы внедрили
          платформу на базе искусственного интеллекта, которая адаптирует образовательные материалы под индивидуальные
          потребности каждого учащегося. Более 100 образовательных учреждений успешно использовали наши решения, и
          результаты превзошли все ожидания. Студенты отмечают, что с помощью нашей платформы они смогли быстрее
          осваивать материал и улучшить свои результаты на экзаменах.
        </p>
        <p>
          Особое внимание мы уделили доступности образования для студентов с особыми потребностями. Благодаря интеграции
          адаптированных материалов и инструментов (в том числе голосовых подсказок и расширенной графики), наша
          платформа стала удобной для людей с различными ограничениями, что также сыграло важную роль в получении
          награды.
        </p>
        <p>
          Наше решение использует элементы геймификации для повышения мотивации учеников и делает процесс обучения более
          увлекательным. Виртуальная реальность (VR) и дополненная реальность (AR) позволяют студентам погружаться в
          учебный процесс, будь то исторические события, научные эксперименты или географические исследования, что делает
          уроки более интерактивными и увлекательными.
        </p>
        <p>
          Награда стала результатом многолетней работы нашей команды и партнёров. Мы благодарны всем учебным заведениям,
          которые приняли участие в пилотных проектах, а также студентам и преподавателям за активное сотрудничество.
          Эта победа вдохновляет нас на дальнейшие разработки и внедрение новых технологий, которые будут способствовать
          улучшению качества образования и обеспечению его доступности для каждого.
        </p>
        <p>Будущее образования уже здесь, и мы гордимся быть его частью.</p>
      </div>
    </div>
  );
};

export default Detall;
