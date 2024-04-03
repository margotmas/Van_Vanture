-- SQLBook: Code
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    email VARCHAR(255) UNIQUE NOT NULL, 
    password VARCHAR(255) NOT NULL, 
    firstname VARCHAR(255) NOT NULL, 
    lastname VARCHAR(255) NOT NULL
);


CREATE TABLE post (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    content TEXT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT, 
    FOREIGN KEY (user_id) REFERENCES user (id)
);

INSERT INTO
    user (email, password, firstname, lastname)
VALUES (
        'yoko@gmail.com', 'mdp', 'Yoko', 'Masset'
    ),
    (
        'nenette@gmail.com', 'mdp', 'Nenette', 'Masset'
    ),
    (
        'boulette@gmail.com', 'mdp', 'Boo', 'Masset'
    ),
    (
        'diablish@gmail.com', 'mdp', 'Diabolo', 'Malet'
    );
INSERT INTO
    post (content, user_id)

VALUES ('Juste une autre journée de vanlife sur la plage ! ☀️🌊 #VanLife #BeachDay', 1),
    ('Coucher de soleil époustouflant depuis notre van ce soir ! 🌅 #VanLife #SunsetViews', 2),
    ('Exploration des routes sinueuses en montagne. La liberté de la vanlife n a pas de prix ! 🏞️ #VanLife #MountainRoads', 3);
