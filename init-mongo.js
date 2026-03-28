db = db.getSiblingDB('notesdb');

db.createUser({
  user: 'appuser',
  pwd: 'apppassword',
  roles: [{ role: 'readWrite', db: 'notesdb' }]
});

db.createCollection('notes');