
module.exports.street = function( db, done ){
  db.serialize(function(){

    // names
    db.run('CREATE INDEX IF NOT EXISTS names_id_idx ON names(id);');
    db.run('CREATE INDEX IF NOT EXISTS names_name_idx ON names(name);');

    db.wait(done);
  });
};

module.exports.address = function( db, done ){
  db.serialize(function(){

    // address
    // note: create these after complete (for performance)
    db.run('CREATE INDEX IF NOT EXISTS address_id_idx ON address(id);');

    // this indices are not strictly required and consume a large amount of disk space
    // db.run('CREATE INDEX IF NOT EXISTS address_source_idx ON address(source);');
    // db.run('CREATE INDEX IF NOT EXISTS address_parity_idx ON address(parity);');
    // db.run('CREATE INDEX IF NOT EXISTS address_housenumber_idx ON address(housenumber);');

    db.wait(done);
  });
};
