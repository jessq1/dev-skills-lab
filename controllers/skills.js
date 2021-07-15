import * as skillsDb from '../data/skill-db.js'


export {
  index,
  newSkill as new,
  show,
  create,
  deleteSkill as delete,
}


function index(req, res) {
    skillsDb.find({}, function(error, skills) {
      res.render('skills/index', {
        skills,
        error,
        time: req.time,
        title: 'All Skills',
      })
    })
  }
  
  function newSkill(req,res){
      res.render('skills/new',{title: 'New Skill'})
  }
  function deleteSkill(req, res) {
    skillsDb.findByIdAndDelete(req.params.id, function(error, skill) {
      res.redirect('/skills')
    })
  }
  
  function create(req,res){
      skillsDb.create(req.body, function(error, skill) {
      res.redirect('/skills')
    })
  }
  
  
  function show(req, res) {
    skillsDb.findById(req.params.id, function(error, skill) {
      res.render('skills/show', {
        skill,
        error,
        title: skill.text
      })
    })
  }
  
  