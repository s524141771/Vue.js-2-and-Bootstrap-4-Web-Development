export default {
  getConfig: state => state.config,
  getSettings: state => state.settings,
  getTotalPomodoros: state => state.statistics.totalPomodoros
}
