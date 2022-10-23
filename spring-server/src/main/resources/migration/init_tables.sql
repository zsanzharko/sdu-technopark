create table users (
    id             serial       not null primary key,
    active         bit          not null,
    email          varchar(255) not null,
    google_open_id varchar(255) null,
    password       varchar(255) null,
    photo          varchar(255) null,
    provider       varchar(255) not null,
    rule           varchar(255) not null,
    constraint UK_sx468g52bpetvlad2j9y0lptc
        unique (email)
);

create table main_links (
    id   int       not null
        primary key,
    link varchar(255) null default 'http:/google.com',
    title varchar(255) not null);

insert into main_links (id, link, title) values (1, 'http:/google.com', 'Twitter');
insert into main_links (id, link, title) values (2, 'http:/google.com', 'Google');
insert into main_links (id, link, title) values (3, 'http:/google.com', 'Instagram');
insert into main_links (id, link, title) values (4, 'http:/google.com', 'Facebook');