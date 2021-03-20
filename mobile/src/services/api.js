import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333'
});

// Apontar localhost da máquina para o localhost do emulador
// Android com emulador: adb reverse tcp:3333 tcp:3333

export default api;