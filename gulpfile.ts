
import { series } from 'gulp'

function clean(cb)
{
  cb();
}

export function build(cb)
{
  cb();
}

export default series(clean, build)
