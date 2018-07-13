using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace LittleTrainingRobotHardwareIO
{
    public sealed class Basic
    {
        private readonly ManualResetEventSlim waitEvent = new ManualResetEventSlim(false);
        private readonly DateTime startTime = DateTime.Now;

        public Basic()
        {

        }
        /// <summary>
        /// Pauses the specified milliseconds.
        /// </summary>
        /// <param name="milliseconds">The milliseconds.</param>
        public void Pause(double milliseconds)
        {
            waitEvent.Wait(TimeSpan.FromMilliseconds(milliseconds));
        }

        /// <summary>
        /// Runnings the time.
        /// </summary>
        /// <returns></returns>
        public double RunningTime()
        {
            return (DateTime.Now - startTime).TotalMilliseconds;
        }
    }
}
