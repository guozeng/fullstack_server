create table if not exists t_users (
  id int primary key not null auto_increment,
  name varchar(100),
  account varchar(100),
  phone char(15),
  nick_name varchar(100),
  password varchar(100),
  sex char(1),
  avatar varchar(255)
);

-- alter table t_users modify phone char(15) not null unique;

insert into t_users (name, phone) values ('张三', '18933332224');

select * from t_users;
