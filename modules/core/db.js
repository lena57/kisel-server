import mongoose from 'mongoose';

function bdConnect() {
  mongoose.connect('mongodb://localhost:27017/kisel');
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
  console.log('Connected!')
})
export default bdConnect;
