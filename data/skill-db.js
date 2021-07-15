export { 
    find,
    findById,
    create,
    findByIdAndDelete,
}

const skills = [
    {text: 'HTML', level: true, _id: 123456},
    {text: 'CSS', level: false, _id: 789012},
    {text: 'JavaScript', level: false, _id: 345678},
    {text: 'MongoDb', level: false, _id: 901234},
    {text: 'Express', level: false, _id: 567890},
    {text: 'Python', level: false, _id: 135790},
  ]


  function create(skill,callback){
    skill._id = Date.now() %1000000
    skill.level = false
    skill.text = skill.text
    return callback(null,skill)
  }
  
  function findByIdAndDelete(id, callback) {
    try { 
      const idx = skills.findIndex(skill => skill._id == parseInt(id))
      const deletedSkill = skills.splice(idx, 1)
      if (!deletedSkill.length ) throw new Error ('No skill was deleted')
      return callback(null, deletedSkill[0])
    } catch(error) {
      return callback(error, null)
    }
  }
  const findById = (id, callback) =>{
    try {
      const skill = skills.find(skill => skill._id === parseInt(id))
      if (!skill) throw new Error ('No skill was found')
      return callback(null, skill)
    } catch (error) {
      console.log(error)
      return callback(error, null)
    }
  }
  
  
  const find = (conditions, callback) => {
    try {
      if (!(conditions instanceof Object)){
        throw new TypeError('Please pass in an object')
      }
      if (Object.keys(conditions).length === 0) return callback(null, skills)
    } catch (error) {
      console.log(error)
      callback(error, [])
    }
  }