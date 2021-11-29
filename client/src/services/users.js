import { api } from "./myFetch";

export function GetAll() { return api('users'); }
export function Get(user_id) { return  api('users/' + user_id); }
export function GetByHandle(handle) { return  api('users/byhandle/' + handle); } 

export function AddLog(user_id, user) {
    return api('users/addLog' + user_id, user +  'PATCH');
}

export function Update(user_id, user) {
    return api('users/' + user_id, user, 'PATCH');
}

export function UpdateTracker(user_id, user) {
    return api('users/updateTracker/' + user_id, user, 'PATCH');
}

export function Delete(user_id) {
    return api('users/' + user_id, {}, 'DELETE');
}

export function Login(handle, password){
    return api('users/login', { handle, password });
}

export function Register(user)
{
    return api('users/register',user)
}

export function Unfollow(follower,follwee)
{
    return api('users/'+follower+'/follow/'+follwee, {} ,'DELETE')
}
export function Follow(follower,follwee)
{
    return api('users/'+follower+'/follow/'+follwee, {})
}

export function Approve(follower,follwee,isApproved)
{
    return api('users/'+follower+'/approve/'+follwee, {isApproved} ,'PATCH')
}